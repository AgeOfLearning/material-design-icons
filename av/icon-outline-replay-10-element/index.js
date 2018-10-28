import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineReplay10Element
 * @class IconOutlineReplay10Element
 * @extends {AoflElement}
 */
class IconOutlineReplay10Element extends AoflElement {
  /**
   * Creates an instance of IconOutlineReplay10Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-replay-10';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineReplay10Element.is, IconOutlineReplay10Element);

export default IconOutlineReplay10Element;
