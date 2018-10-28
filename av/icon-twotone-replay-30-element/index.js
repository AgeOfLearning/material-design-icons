import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneReplay30Element
 * @class IconTwotoneReplay30Element
 * @extends {AoflElement}
 */
class IconTwotoneReplay30Element extends AoflElement {
  /**
   * Creates an instance of IconTwotoneReplay30Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-replay-30';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneReplay30Element.is, IconTwotoneReplay30Element);

export default IconTwotoneReplay30Element;
