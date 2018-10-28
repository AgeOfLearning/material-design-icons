import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundReplay30Element
 * @class IconRoundReplay30Element
 * @extends {AoflElement}
 */
class IconRoundReplay30Element extends AoflElement {
  /**
   * Creates an instance of IconRoundReplay30Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-replay-30';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundReplay30Element.is, IconRoundReplay30Element);

export default IconRoundReplay30Element;
