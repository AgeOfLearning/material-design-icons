import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLocationSearchingElement
 * @class IconBaselineLocationSearchingElement
 * @extends {AoflElement}
 */
class IconBaselineLocationSearchingElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLocationSearchingElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-location-searching';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLocationSearchingElement.is, IconBaselineLocationSearchingElement);

export default IconBaselineLocationSearchingElement;
