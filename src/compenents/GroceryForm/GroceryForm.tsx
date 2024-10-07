import type { GroceryNew } from '../../@types/grocery';
import { useId, useState } from 'react';

export type GroceryFormProps = {
    onGrocerySubmit: (grocery: GroceryNew) => void;
};

//! Composant formulaire réutilisable (Celui-ci n'est donc pas lier à Redux)
const GroceryForm = ({ onGrocerySubmit }: GroceryFormProps) => {
    
    //? Version bisounours du formulaire -> L'utilisateur est gentil =)
    const inputId = useId();

    const [name, setName] = useState<string>('');
    const [quantity, setQuantity] = useState<string>('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        onGrocerySubmit({
            name,
            quantity: parseInt(quantity)
        });

        setName('');
        setQuantity('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor={inputId + 'Name'}>Nom : </label>
                <input id={inputId + 'Name'} type='text'
                    value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label htmlFor={inputId + 'Qte'}>Quantité : </label>
                <input id={inputId + 'Qte'} type='text'
                    value={quantity} onChange={(e) => setQuantity(e.target.value)} />
            </div>
            <div>
                <button type='submit'>Valider</button>
            </div>
        </form>
    );
};

export default GroceryForm;