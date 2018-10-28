import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineClosedCaptionElement
 * @class IconBaselineClosedCaptionElement
 * @extends {AoflElement}
 */
class IconBaselineClosedCaptionElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineClosedCaptionElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-closed-caption';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineClosedCaptionElement.is, IconBaselineClosedCaptionElement);

export default IconBaselineClosedCaptionElement;
