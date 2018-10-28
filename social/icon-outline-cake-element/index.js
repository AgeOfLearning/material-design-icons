import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCakeElement
 * @class IconOutlineCakeElement
 * @extends {AoflElement}
 */
class IconOutlineCakeElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineCakeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-cake';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCakeElement.is, IconOutlineCakeElement);

export default IconOutlineCakeElement;
