import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineDnsElement
 * @class IconBaselineDnsElement
 * @extends {AoflElement}
 */
class IconBaselineDnsElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineDnsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-dns';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineDnsElement.is, IconBaselineDnsElement);

export default IconBaselineDnsElement;
