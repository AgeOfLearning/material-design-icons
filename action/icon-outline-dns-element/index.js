import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineDnsElement
 * @class IconOutlineDnsElement
 * @extends {AoflElement}
 */
class IconOutlineDnsElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineDnsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-dns';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineDnsElement.is, IconOutlineDnsElement);

export default IconOutlineDnsElement;
