import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineUpdateElement
 * @class IconBaselineUpdateElement
 * @extends {AoflElement}
 */
class IconBaselineUpdateElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineUpdateElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-update';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineUpdateElement.is, IconBaselineUpdateElement);

export default IconBaselineUpdateElement;
