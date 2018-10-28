import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineControlPointElement
 * @class IconBaselineControlPointElement
 * @extends {AoflElement}
 */
class IconBaselineControlPointElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineControlPointElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-control-point';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineControlPointElement.is, IconBaselineControlPointElement);

export default IconBaselineControlPointElement;
