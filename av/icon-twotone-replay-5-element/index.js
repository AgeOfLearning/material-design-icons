import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneReplay5Element
 * @class IconTwotoneReplay5Element
 * @extends {AoflElement}
 */
class IconTwotoneReplay5Element extends AoflElement {
  /**
   * Creates an instance of IconTwotoneReplay5Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-replay-5';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneReplay5Element.is, IconTwotoneReplay5Element);

export default IconTwotoneReplay5Element;
