export default function page() {
  return (
    <div className="px-5 py-5">
      <h3>Размерная сетка</h3>

      <table className="w-full table-fixed gap-2.5 text-center mt-6">
        <thead>
          <tr className="text-base">
            <th>EU</th>
            <th>US</th>
            <th>UK</th>
            <th>CM</th>
            <th>Стельки</th>
          </tr>
        </thead>
        <tbody className="font-semibold divide-y divide-brand-gray-100">
          <tr>
            <td className="py-2">38.5</td>
            <td>6</td>
            <td>5.5</td>
            <td>24</td>
            <td>24 см</td>
          </tr>
          <tr>
            <td className="py-2">39</td>
            <td>6.5</td>
            <td>6</td>
            <td>24.5</td>
            <td>24 см</td>
          </tr>
          <tr>
            <td className="py-2">40</td>
            <td>7</td>
            <td>6</td>
            <td>25</td>
            <td>25 см</td>
          </tr>
          <tr>
            <td className="py-2">40.5</td>
            <td>7.5</td>
            <td>6.5</td>
            <td>25.5</td>
            <td>25 см</td>
          </tr>
          <tr>
            <td className="py-2">41</td>
            <td>8</td>
            <td>7</td>
            <td>26</td>
            <td>26 см</td>
          </tr>
          <tr>
            <td className="py-2">42</td>
            <td>8.5</td>
            <td>7.5</td>
            <td>26.5</td>
            <td>26 см</td>
          </tr>
          <tr>
            <td className="py-2">42.5</td>
            <td>9</td>
            <td>8</td>
            <td>27</td>
            <td>27 см</td>
          </tr>
          <tr>
            <td className="py-2">43</td>
            <td>9.5</td>
            <td>8.5</td>
            <td>27.5</td>
            <td>27 см</td>
          </tr>
          <tr>
            <td className="py-2">44</td>
            <td>10</td>
            <td>9</td>
            <td>28</td>
            <td>28 см</td>
          </tr>
          <tr>
            <td className="py-2">44.5</td>
            <td>10.5</td>
            <td>9.5</td>
            <td>28.5</td>
            <td>28 см</td>
          </tr>
          <tr>
            <td className="py-2">46</td>
            <td>11</td>
            <td>10</td>
            <td>29</td>
            <td>29 см</td>
          </tr>
          <tr>
            <td className="py-2">47</td>
            <td>11.5</td>
            <td>10.5</td>
            <td>29.5</td>
            <td>29 см</td>
          </tr>
          <tr>
            <td className="py-2">48</td>
            <td>12</td>
            <td>11</td>
            <td>30</td>
            <td>30 см</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
