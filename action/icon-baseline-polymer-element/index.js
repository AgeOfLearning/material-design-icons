import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePolymerElement
 * @class IconBaselinePolymerElement
 * @extends {AoflElement}
 */
class IconBaselinePolymerElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePolymerElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-polymer';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePolymerElement.is, IconBaselinePolymerElement);

export default IconBaselinePolymerElement;
