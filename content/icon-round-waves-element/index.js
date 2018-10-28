import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundWavesElement
 * @class IconRoundWavesElement
 * @extends {AoflElement}
 */
class IconRoundWavesElement extends AoflElement {
  /**
   * Creates an instance of IconRoundWavesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-waves';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundWavesElement.is, IconRoundWavesElement);

export default IconRoundWavesElement;
