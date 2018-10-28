import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundEqualizerElement
 * @class IconRoundEqualizerElement
 * @extends {AoflElement}
 */
class IconRoundEqualizerElement extends AoflElement {
  /**
   * Creates an instance of IconRoundEqualizerElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-equalizer';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundEqualizerElement.is, IconRoundEqualizerElement);

export default IconRoundEqualizerElement;
