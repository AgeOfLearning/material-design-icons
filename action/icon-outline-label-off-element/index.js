import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLabelOffElement
 * @class IconOutlineLabelOffElement
 * @extends {AoflElement}
 */
class IconOutlineLabelOffElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLabelOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-label-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLabelOffElement.is, IconOutlineLabelOffElement);

export default IconOutlineLabelOffElement;
