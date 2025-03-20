export const objectUtil = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    sortObjectByKeys: (unordered) => {
        return Object.keys(unordered)
            .sort()
            .reduce((obj, key) => {
            // @ts-expect-error
            obj[key] = unordered[key];
            return obj;
        }, {});
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0LXV0aWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbC9vYmplY3QtdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLENBQUMsTUFBTSxVQUFVLEdBQUc7SUFDekIsOERBQThEO0lBQzlELGdCQUFnQixFQUFFLENBQWdDLFNBQVksRUFBSyxFQUFFO1FBQ3BFLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDM0IsSUFBSSxFQUFFO2FBQ04sTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQ3BCLG1CQUFtQjtZQUNuQixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBRXpCLE9BQU8sR0FBRyxDQUFBO1FBQ1gsQ0FBQyxFQUFFLEVBQUUsQ0FBTSxDQUFBO0lBQ2IsQ0FBQztDQUNELENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgb2JqZWN0VXRpbCA9IHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcblx0c29ydE9iamVjdEJ5S2V5czogPFQgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBhbnk+Pih1bm9yZGVyZWQ6IFQpOiBUID0+IHtcblx0XHRyZXR1cm4gT2JqZWN0LmtleXModW5vcmRlcmVkKVxuXHRcdFx0LnNvcnQoKVxuXHRcdFx0LnJlZHVjZSgob2JqLCBrZXkpID0+IHtcblx0XHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvclxuXHRcdFx0XHRvYmpba2V5XSA9IHVub3JkZXJlZFtrZXldXG5cblx0XHRcdFx0cmV0dXJuIG9ialxuXHRcdFx0fSwge30pIGFzIFRcblx0fSxcbn1cbiJdfQ==