import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundReplay5Element
 * @class IconRoundReplay5Element
 * @extends {AoflElement}
 */
class IconRoundReplay5Element extends AoflElement {
  /**
   * Creates an instance of IconRoundReplay5Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-replay-5';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundReplay5Element.is, IconRoundReplay5Element);

export default IconRoundReplay5Element;
