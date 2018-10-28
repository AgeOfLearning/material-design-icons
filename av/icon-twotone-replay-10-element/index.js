import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneReplay10Element
 * @class IconTwotoneReplay10Element
 * @extends {AoflElement}
 */
class IconTwotoneReplay10Element extends AoflElement {
  /**
   * Creates an instance of IconTwotoneReplay10Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-replay-10';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneReplay10Element.is, IconTwotoneReplay10Element);

export default IconTwotoneReplay10Element;
