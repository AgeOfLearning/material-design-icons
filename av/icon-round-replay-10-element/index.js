import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundReplay10Element
 * @class IconRoundReplay10Element
 * @extends {AoflElement}
 */
class IconRoundReplay10Element extends AoflElement {
  /**
   * Creates an instance of IconRoundReplay10Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-replay-10';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundReplay10Element.is, IconRoundReplay10Element);

export default IconRoundReplay10Element;
