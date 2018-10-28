import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBorderClearElement
 * @class IconBaselineBorderClearElement
 * @extends {AoflElement}
 */
class IconBaselineBorderClearElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineBorderClearElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-border-clear';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBorderClearElement.is, IconBaselineBorderClearElement);

export default IconBaselineBorderClearElement;
