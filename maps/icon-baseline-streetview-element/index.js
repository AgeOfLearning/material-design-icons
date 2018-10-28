import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineStreetviewElement
 * @class IconBaselineStreetviewElement
 * @extends {AoflElement}
 */
class IconBaselineStreetviewElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineStreetviewElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-streetview';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineStreetviewElement.is, IconBaselineStreetviewElement);

export default IconBaselineStreetviewElement;
