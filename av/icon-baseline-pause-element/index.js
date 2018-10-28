import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePauseElement
 * @class IconBaselinePauseElement
 * @extends {AoflElement}
 */
class IconBaselinePauseElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePauseElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-pause';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePauseElement.is, IconBaselinePauseElement);

export default IconBaselinePauseElement;
