import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePhotoCameraElement
 * @class IconBaselinePhotoCameraElement
 * @extends {AoflElement}
 */
class IconBaselinePhotoCameraElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePhotoCameraElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-photo-camera';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePhotoCameraElement.is, IconBaselinePhotoCameraElement);

export default IconBaselinePhotoCameraElement;
