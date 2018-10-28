import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineClearElement
 * @class IconBaselineClearElement
 * @extends {AoflElement}
 */
class IconBaselineClearElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineClearElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-clear';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineClearElement.is, IconBaselineClearElement);

export default IconBaselineClearElement;
