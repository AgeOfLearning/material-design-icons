import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePauseElement
 * @class IconOutlinePauseElement
 * @extends {AoflElement}
 */
class IconOutlinePauseElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePauseElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-pause';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePauseElement.is, IconOutlinePauseElement);

export default IconOutlinePauseElement;
