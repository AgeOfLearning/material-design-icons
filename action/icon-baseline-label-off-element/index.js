import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLabelOffElement
 * @class IconBaselineLabelOffElement
 * @extends {AoflElement}
 */
class IconBaselineLabelOffElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLabelOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-label-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLabelOffElement.is, IconBaselineLabelOffElement);

export default IconBaselineLabelOffElement;
