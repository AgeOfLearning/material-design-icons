import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSpaElement
 * @class IconOutlineSpaElement
 * @extends {AoflElement}
 */
class IconOutlineSpaElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSpaElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-spa';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSpaElement.is, IconOutlineSpaElement);

export default IconOutlineSpaElement;
