import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineTuneElement
 * @class IconOutlineTuneElement
 * @extends {AoflElement}
 */
class IconOutlineTuneElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineTuneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-tune';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineTuneElement.is, IconOutlineTuneElement);

export default IconOutlineTuneElement;
