import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineGetAppElement
 * @class IconBaselineGetAppElement
 * @extends {AoflElement}
 */
class IconBaselineGetAppElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineGetAppElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-get-app';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineGetAppElement.is, IconBaselineGetAppElement);

export default IconBaselineGetAppElement;
