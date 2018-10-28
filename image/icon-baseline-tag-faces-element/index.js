import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineTagFacesElement
 * @class IconBaselineTagFacesElement
 * @extends {AoflElement}
 */
class IconBaselineTagFacesElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineTagFacesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-tag-faces';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineTagFacesElement.is, IconBaselineTagFacesElement);

export default IconBaselineTagFacesElement;
