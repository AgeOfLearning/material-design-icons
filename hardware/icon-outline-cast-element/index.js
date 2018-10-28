import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCastElement
 * @class IconOutlineCastElement
 * @extends {AoflElement}
 */
class IconOutlineCastElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineCastElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-cast';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCastElement.is, IconOutlineCastElement);

export default IconOutlineCastElement;
