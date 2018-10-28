import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSystemUpdateElement
 * @class IconBaselineSystemUpdateElement
 * @extends {AoflElement}
 */
class IconBaselineSystemUpdateElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSystemUpdateElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-system-update';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSystemUpdateElement.is, IconBaselineSystemUpdateElement);

export default IconBaselineSystemUpdateElement;
