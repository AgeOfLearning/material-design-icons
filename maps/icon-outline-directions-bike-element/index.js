import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineDirectionsBikeElement
 * @class IconOutlineDirectionsBikeElement
 * @extends {AoflElement}
 */
class IconOutlineDirectionsBikeElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineDirectionsBikeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-directions-bike';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineDirectionsBikeElement.is, IconOutlineDirectionsBikeElement);

export default IconOutlineDirectionsBikeElement;
