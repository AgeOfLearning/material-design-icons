import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpReplay10Element
 * @class IconSharpReplay10Element
 * @extends {AoflElement}
 */
class IconSharpReplay10Element extends AoflElement {
  /**
   * Creates an instance of IconSharpReplay10Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-replay-10';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpReplay10Element.is, IconSharpReplay10Element);

export default IconSharpReplay10Element;
