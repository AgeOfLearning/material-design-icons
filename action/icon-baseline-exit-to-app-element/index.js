import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineExitToAppElement
 * @class IconBaselineExitToAppElement
 * @extends {AoflElement}
 */
class IconBaselineExitToAppElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineExitToAppElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-exit-to-app';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineExitToAppElement.is, IconBaselineExitToAppElement);

export default IconBaselineExitToAppElement;
