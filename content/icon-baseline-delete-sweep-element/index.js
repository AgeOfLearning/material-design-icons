import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineDeleteSweepElement
 * @class IconBaselineDeleteSweepElement
 * @extends {AoflElement}
 */
class IconBaselineDeleteSweepElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineDeleteSweepElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-delete-sweep';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineDeleteSweepElement.is, IconBaselineDeleteSweepElement);

export default IconBaselineDeleteSweepElement;
