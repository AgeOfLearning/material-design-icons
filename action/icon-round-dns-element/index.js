import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundDnsElement
 * @class IconRoundDnsElement
 * @extends {AoflElement}
 */
class IconRoundDnsElement extends AoflElement {
  /**
   * Creates an instance of IconRoundDnsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-dns';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundDnsElement.is, IconRoundDnsElement);

export default IconRoundDnsElement;
