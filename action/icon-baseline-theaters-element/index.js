import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineTheatersElement
 * @class IconBaselineTheatersElement
 * @extends {AoflElement}
 */
class IconBaselineTheatersElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineTheatersElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-theaters';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineTheatersElement.is, IconBaselineTheatersElement);

export default IconBaselineTheatersElement;
