import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineWavesElement
 * @class IconBaselineWavesElement
 * @extends {AoflElement}
 */
class IconBaselineWavesElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineWavesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-waves';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineWavesElement.is, IconBaselineWavesElement);

export default IconBaselineWavesElement;
