import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBlockElement
 * @class IconOutlineBlockElement
 * @extends {AoflElement}
 */
class IconOutlineBlockElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineBlockElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-block';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBlockElement.is, IconOutlineBlockElement);

export default IconOutlineBlockElement;
