import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundTapAndPlayElement
 * @class IconRoundTapAndPlayElement
 * @extends {AoflElement}
 */
class IconRoundTapAndPlayElement extends AoflElement {
  /**
   * Creates an instance of IconRoundTapAndPlayElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-tap-and-play';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundTapAndPlayElement.is, IconRoundTapAndPlayElement);

export default IconRoundTapAndPlayElement;
