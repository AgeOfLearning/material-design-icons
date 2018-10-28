import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundForward10Element
 * @class IconRoundForward10Element
 * @extends {AoflElement}
 */
class IconRoundForward10Element extends AoflElement {
  /**
   * Creates an instance of IconRoundForward10Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-forward-10';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundForward10Element.is, IconRoundForward10Element);

export default IconRoundForward10Element;
