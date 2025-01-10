const BASE_URL = `${import.meta.env.VITE_EXPRESS_BACKEND_URL}/hopshops`;

const index = async () => {
    try {
      const res = await fetch(BASE_URL, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      return res.json();
    } catch (error) {
      console.log(error);
    }
};

const show = async (hopshopId) => {
    try {
      const res = await fetch(`${BASE_URL}/${hopshopId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      return res.json();
    } catch (error) {
      console.log(error);
    }
};

const create = async (hopshopFormData) => {
    try {
      const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(hopshopFormData),
      });
      return res.json();
    } catch (error) {
      console.log(error);
    }
};

const createComment = async (hopshopId, commentFormData) => {
    try {
      const dataToSend = {
        ...commentFormData,
        items: commentFormData.text.split(',').map(item => item.trim())
      };
      const res = await fetch(`${BASE_URL}/${hopshopId}/comments`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentFormData),
      });
      return res.json();
    } catch (error) {
      console.log(error);
    }
};
  
export { index, show, create, createComment};