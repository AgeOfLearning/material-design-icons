import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundMicElement
 * @class IconRoundMicElement
 * @extends {AoflElement}
 */
class IconRoundMicElement extends AoflElement {
  /**
   * Creates an instance of IconRoundMicElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-mic';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundMicElement.is, IconRoundMicElement);

export default IconRoundMicElement;
