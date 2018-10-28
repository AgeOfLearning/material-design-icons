import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineStarsElement
 * @class IconOutlineStarsElement
 * @extends {AoflElement}
 */
class IconOutlineStarsElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineStarsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-stars';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineStarsElement.is, IconOutlineStarsElement);

export default IconOutlineStarsElement;
