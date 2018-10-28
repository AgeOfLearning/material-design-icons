import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundMicNoneElement
 * @class IconRoundMicNoneElement
 * @extends {AoflElement}
 */
class IconRoundMicNoneElement extends AoflElement {
  /**
   * Creates an instance of IconRoundMicNoneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-mic-none';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundMicNoneElement.is, IconRoundMicNoneElement);

export default IconRoundMicNoneElement;
