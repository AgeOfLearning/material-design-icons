import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneDnsElement
 * @class IconTwotoneDnsElement
 * @extends {AoflElement}
 */
class IconTwotoneDnsElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneDnsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-dns';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneDnsElement.is, IconTwotoneDnsElement);

export default IconTwotoneDnsElement;
