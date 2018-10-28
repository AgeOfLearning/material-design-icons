import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundTonalityElement
 * @class IconRoundTonalityElement
 * @extends {AoflElement}
 */
class IconRoundTonalityElement extends AoflElement {
  /**
   * Creates an instance of IconRoundTonalityElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-tonality';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundTonalityElement.is, IconRoundTonalityElement);

export default IconRoundTonalityElement;
