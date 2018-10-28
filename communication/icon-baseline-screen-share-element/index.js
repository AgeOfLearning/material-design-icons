import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineScreenShareElement
 * @class IconBaselineScreenShareElement
 * @extends {AoflElement}
 */
class IconBaselineScreenShareElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineScreenShareElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-screen-share';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineScreenShareElement.is, IconBaselineScreenShareElement);

export default IconBaselineScreenShareElement;
