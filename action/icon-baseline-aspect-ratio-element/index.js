import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAspectRatioElement
 * @class IconBaselineAspectRatioElement
 * @extends {AoflElement}
 */
class IconBaselineAspectRatioElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAspectRatioElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-aspect-ratio';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAspectRatioElement.is, IconBaselineAspectRatioElement);

export default IconBaselineAspectRatioElement;
