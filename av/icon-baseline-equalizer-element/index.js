import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineEqualizerElement
 * @class IconBaselineEqualizerElement
 * @extends {AoflElement}
 */
class IconBaselineEqualizerElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineEqualizerElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-equalizer';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineEqualizerElement.is, IconBaselineEqualizerElement);

export default IconBaselineEqualizerElement;
